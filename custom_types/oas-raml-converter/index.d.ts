/** Declaration file generated by dts-gen */

export class Converter {
  constructor(fromFormat: any, toFormat: any, ...args: any[]);

  convertData(data: any, options: any): any;

  convertFile(file: any, options: any): any;

  convertFromModel(model: any, options: any): any;

  getModelFromData(data: any, options: any): any;

  getModelFromFile(file: any, options: any): any;

}

export const Formats: {
  OAS20: {
      className: string;
      export: boolean;
      formats: string[];
      import: boolean;
      name: string;
  };
  OAS30: {
      className: string;
      export: boolean;
      formats: string[];
      import: boolean;
      name: string;
  };
  RAML: {
      className: string;
      export: boolean;
      formats: string[];
      import: boolean;
      name: string;
  };
};

