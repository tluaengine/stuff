import time
import os

from pypresence import Presence
os.system("title Discord RP")
# =================== CONFIG ===================
CLIENT_ID = "1537320371714392084"  

DETAILS = "Modding with BB465 menu" 
STATE   = "discord.gg/n5mh" 

LARGE_IMAGE = None  
LARGE_TEXT  = "BB465 menu"  

SMALL_IMAGE = "image"  
SMALL_TEXT  = None  


BUTTONS = [
    {"label": "Join the Discord", "url": "https://discord.gg/n5mh"},
]

USE_ELAPSED_TIMER = True   # shows "started X ago"; set False for just the text
# ==============================================


def main():
    rpc = None
    start = int(time.time()) if USE_ELAPSED_TIMER else None
    while True:
        try:
            if rpc is None:
                print("Connecting to Discord... (make sure Discord is running)")
                rpc = Presence(CLIENT_ID)
                rpc.connect()
                print("Rich presence active. Press Ctrl+C to quit.")
            rpc.update(
                details=DETAILS,
                state=STATE,
                large_image=LARGE_IMAGE,
                large_text=LARGE_TEXT,
                small_image=SMALL_IMAGE,
                small_text=SMALL_TEXT,
                buttons=BUTTONS or None,
                start=start,
            )
            time.sleep(15)
        except KeyboardInterrupt:
            raise
        except Exception as e:
            print(f"Problem: {e} — retrying in 5s...")
            rpc = None
            time.sleep(5)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nClearing presence...")
    except Exception as e:
        print(f"\nERROR: {e}")
    finally:
        try:
            Presence(CLIENT_ID).close()
        except Exception:
            pass
        input("Press Enter to close...")
