from netmiko import ConnectHandler
import difflib
import tkinter as tk
import os
import sys

sys.path.append('C:/Users/ja_thummala/AppData/Roaming/Python/Python39/site-packages')

# Commands
retrieve_current_settings_commands = ['show ip bgp summary']
apply_new_settings_commands_ios = ['...']  # Add IOS specific commands
apply_new_settings_commands_nxos = ['...']  # Add NXOS specific commands

def create_device(ip):
    # Existing device creation logic...
    # ...

def execute_commands(device, command_list, action="Checking", file_suffix=""):
    try:
        connect_device = ConnectHandler(**device)
        print(f"Logged into device: {device['ip']}")

        all_output = ""
        for command in command_list:
            output = connect_device.send_command(command)
            formatted_output = f"\nDevice {device['ip']} Command: {command}\nOutput:\n{output}\n"
            all_output += formatted_output
            print(formatted_output)
        
        with open(f"{device['ip']}{file_suffix}.txt", "w") as file:
            file.write(all_output)

    except Exception as e:
        print(f"Device {device['ip']} Error: {e}")
    finally:
        if connect_device:
            connect_device.disconnect()

def compare_outputs(old_file, new_file):
    with open(old_file, 'r') as file1, open(new_file, 'r') as file2:
        diff = difflib.unified_diff(
            file1.readlines(), file2.readlines(), 
            fromfile='old', tofile='new', lineterm=''
        )

    changes_file = f"changes_{new_file}"
    with open(changes_file, "w") as file:
        for line in diff:
            file.write(line + '\n')
    return changes_file

def display_changes(file_path):
    if not os.path.exists(file_path):
        print("File not found:", file_path)
        return

    root = tk.Tk()
    root.title("Configuration Changes")

    text_area = tk.Text(root, wrap='word')
    text_area.pack(expand=True, fill='both')

    with open(file_path, 'r') as file:
        changes = file.read()
        text_area.insert(tk.END, changes)

    root.mainloop()

def main():
    # Read IPs from file
    with open("ips.txt", "r") as file:
        ip_list = file.read().splitlines()

    for ip in ip_list:
        device = create_device(ip)
        if device is None:
            continue

        # Perform pre-check and save output
        pre_check_file = f"{ip}_pre_check"
        execute_commands(device, retrieve_current_settings_commands, "Pre-Check", pre_check_file)

        # Apply changes and perform post-check
        # apply_changes(device) # Uncomment and define this function if needed
        post_check_file = f"{ip}_post_check"
        execute_commands(device, retrieve_current_settings_commands, "Post-Check", post_check_file)

        # Compare outputs and highlight changes
        changes_file = compare_outputs(f"{pre_check_file}.txt", f"{post_check_file}.txt")
        print(f"Changes highlighted in {changes_file}")

        # Display changes
        display_changes(changes_file)

if __name__ == "__main__":
    main()
