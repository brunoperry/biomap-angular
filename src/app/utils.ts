export class Util {
  static getTypeIcon(type: string, opt: any = null): any {
    let color;
    switch (type) {
      case 'restaurant':
        color = '--blue';
        break;
      case 'farm':
        color = '--red';
        break;
      case 'market':
        color = '--green-c';
        break;
      case 'other':
        color = '--green-a';
        break;
      default:
        color = '--white';
        break;
    }
    let icon = Util.getIcon('type', 28, 28, color);

    //use this to align svg with parent (used in site title component)
    if (opt) {
      console.log(opt);
    }

    return icon;
  }

  static getIcon(
    name: string,
    width: number,
    height: number,
    color: string | null = null
  ): any {
    const template = document.querySelector('template')?.content;
    if (!template) return 'null';

    let icon = document.importNode(template, true).querySelector(`.${name}`);

    if (!icon) return 'null';
    icon.setAttribute('width', `${width}px`);
    icon.setAttribute('height', `${height}px`);

    if (color) {
      icon.setAttribute('fill', `var(${color})`);
    }

    return icon.outerHTML;
  }

  static getImage(
    url: string,
    width: number,
    height: number,
    radius: string = '0'
  ): any {
    const image: any = document.createElement('img');
    image.src = url;
    image.setAttribute('width', `${width}px`);
    image.setAttribute('height', `${height}px`);
    image.style.borderRadius = radius;

    return image.outerHTML;
  }

  static SPEED =
    parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--speed')
        .replace('s', '')
    ) * 1000;
}
