export class applicationDto {
  id: string = '';
  name: string = '';
  description: string = '';
  icon: string = '';
  type: string = '';
  author: string = '';
  author_url: string = '';
  author_icon: string = '';
  version: string = '';
  color: string = '';
  tags: string[] = [];
  screenshots: string[] = [];
  created: string = '';
  downloads: number = 0;
  rating: number = 0;
  rating_count: number = 0;
  license: string = '';
  changelog: string = '';
  config_payload: config_payload[] = [];
  config_output: config_output[] = [];
  attributes: {} = {};
  application: string = '';
}

export class config_payload {
  type: string = '';
  name: string = '';
  required: boolean = false;
  default: string = '';
  defaultType: string = '';
  order: number = 0;
}

export class config_output {
  type: string = '';
  description: string = '';
  required: boolean = false;
  default: string = '';
  defaultType: string = '';
  order: number = 0;
}