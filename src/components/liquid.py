import pandas as pd

# Read the excel file
df = pd.read_excel('files.xlsx')

# Create empty list to store formatted strings
output_strings = []

# Iterate over unique bond names
for bond in df['Bond'].unique():
    bond_df = df[df['Bond'] == bond]

    # Identify lowest buyer price and highest seller price
    try:
        buyer_price = bond_df[bond_df['Side'] == 'Buyer']['Price'].min() - 0.01
    except:
        buyer_price = None

    try:
        seller_price = bond_df[bond_df['Side'] == 'Seller']['Price'].max() + 0.01
    except:
        seller_price = None

    # Extract trade size (assuming from the buyer)
    trade_size = bond_df[bond_df['Side'] == 'Buyer']['Size (MM)'].iloc[0]

    # Format the string
    formatted_str = f"{bond} 0 36 TAP € {buyer_price:.2f}/{seller_price:.2f} {trade_size}"
    output_strings.append(formatted_str)

# Convert list to DataFrame and save to Excel
output_df = pd.DataFrame(output_strings, columns=['Formatted Output'])
output_df.to_excel('output_file_path_here.xlsx', index=False)
