import fileSaver from 'file-saver';

/**
 * @description Utility class used to export csv files
 * @author Mathias Milter Liboriussen
 */
export class Csvexporter {

    public static downloadFile(data: any) {
        const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
        const header = Object.keys(data[0]);
        let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
        csv.unshift(header.join(';'));
        let csvArray = csv.join('\r\n');
    
        var blob = new Blob([csvArray], {type: 'text/csv' })
        fileSaver.saveAs(blob, "myFile.csv");
    }
}
