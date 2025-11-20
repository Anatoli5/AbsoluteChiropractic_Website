from PIL import Image
import os

def remove_white_background(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Change all white (also shades of whites) pixels to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process both logo files just in case
base_dir = r"e:\Project_backup\AbsoluteChiropractic_Website\public"
remove_white_background(os.path.join(base_dir, "logo-icon.png"), os.path.join(base_dir, "logo-icon.png"))
remove_white_background(os.path.join(base_dir, "logo.png"), os.path.join(base_dir, "logo.png"))
