import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StringLibrary {
    cleanText(value: string): string {
        if (!value) { return value; }

        do { value = value.replace(' ', ''); } while (value.indexOf(' ') > -1);
        do { value = value.replace('|', ''); } while (value.indexOf('|') > -1);
        do { value = value.replace('/', ''); } while (value.indexOf('/') > -1);
        do { value = value.replace(';', ''); } while (value.indexOf(';') > -1);
        do { value = value.replace('+', ''); } while (value.indexOf('+') > -1);
        do { value = value.replace('=', ''); } while (value.indexOf('=') > -1);
        do { value = value.replace(':', ''); } while (value.indexOf(':') > -1);
        do { value = value.replace('.', ''); } while (value.indexOf('.') > -1);
        do { value = value.replace('-', ''); } while (value.indexOf('-') > -1);
        do { value = value.replace('(', ''); } while (value.indexOf('(') > -1);
        do { value = value.replace(')', ''); } while (value.indexOf(')') > -1);

        do { value = value.replace('ç', 'c'); } while (value.indexOf('ç') > -1);
        do { value = value.replace('ã', 'a'); } while (value.indexOf('ã') > -1);
        do { value = value.replace('à', 'a'); } while (value.indexOf('à') > -1);
        do { value = value.replace('á', 'a'); } while (value.indexOf('á') > -1);
        do { value = value.replace('ä', 'a'); } while (value.indexOf('ä') > -1);
        do { value = value.replace('ä', 'a'); } while (value.indexOf('ä') > -1);
        do { value = value.replace('â', 'a'); } while (value.indexOf('â') > -1);
        do { value = value.replace('é', 'e'); } while (value.indexOf('é') > -1);
        do { value = value.replace('è', 'e'); } while (value.indexOf('è') > -1);
        do { value = value.replace('ê', 'e'); } while (value.indexOf('ê') > -1);
        do { value = value.replace('ë', 'e'); } while (value.indexOf('ë') > -1);
        do { value = value.replace('ï', 'i'); } while (value.indexOf('ï') > -1);
        do { value = value.replace('í', 'i'); } while (value.indexOf('í') > -1);
        do { value = value.replace('ì', 'i'); } while (value.indexOf('ì') > -1);
        do { value = value.replace('î', 'i'); } while (value.indexOf('î') > -1);
        do { value = value.replace('ô', 'o'); } while (value.indexOf('ô') > -1);
        do { value = value.replace('ó', 'o'); } while (value.indexOf('ó') > -1);
        do { value = value.replace('ò', 'o'); } while (value.indexOf('ò') > -1);
        do { value = value.replace('õ', 'o'); } while (value.indexOf('õ') > -1);
        do { value = value.replace('ö', 'o'); } while (value.indexOf('ö') > -1);
        do { value = value.replace('ú', 'u'); } while (value.indexOf('ú') > -1);
        do { value = value.replace('ù', 'u'); } while (value.indexOf('ù') > -1);
        do { value = value.replace('ü', 'u'); } while (value.indexOf('ü') > -1);

        return value;
    }

    /**
     * @description Aplica a máscara em uma string.
     * @param value String que deve ser aplicada a máscara
     * @param regex Cadeia de regex por caracter que deve aplicada a máscara
     */
    applyInputMask(value: string, regex: any[]): string {
        let newValue: string = '';
        const valueChars: string[] = this.cleanText(value).split('');

        let j: number = 0;
        for (let i = 0; i < valueChars.length; i++) {
            const char: string = valueChars[i];
            let regItem: any = regex[j++];

            if (!regItem) { break; }

            while (typeof regItem === 'string') {
                newValue += regItem;
                regItem = regex[j++];
            }

            const reg = new RegExp(regItem);
            if (reg.test(char)) {
                newValue += char;
            }
        }

        return newValue;
    }
}