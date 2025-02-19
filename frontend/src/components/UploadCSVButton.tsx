import * as React from 'react';
import Button from '@mui/material/Button';

const UploadCSVButton: React.FC = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvText = e.target?.result as string;
        // Split text by newlines into rows
        const lines = csvText.split(/\r?\n/);
        // Filter out any empty lines and split each line by commas:
        const items = lines
          .filter(line => line.trim().length > 0)
          .map(line => line.split(',').map(item => item.trim()));
          
        console.log("Extracted CSV items:", items);
      };

      reader.onerror = (err) => {
        console.error("Error reading CSV file:", err);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        accept=".csv"
        style={{ display: 'none' }}
        id="upload-csv"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-csv">
        <Button variant="contained" component="span">
          Upload CSV
        </Button>
      </label>
    </div>
  );
};

export default UploadCSVButton; 