const template = document.querySelector('template')?.content;
let ICONS_POOL: any = null;
if (template) {
  ICONS_POOL = document.importNode(template, true).querySelectorAll('svg');
}

export class Util {
  static getTypeIcon(
    type: string,
    width: number = 28,
    height: number = 28
  ): any {
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
    let icon = Util.getIcon('type', width, height, `var(${color})`);

    return icon;
  }

  static getIcon(
    name: string,
    width: number = 32,
    height: number = 32,
    fill: string | null = null
  ): any {
    if (!ICONS_POOL) return 'null';

    const hasType = name.split(':');
    if (hasType.length > 1) return Util.getTypeIcon(hasType[1]);

    let icon: any = Array.from(ICONS_POOL).find(
      (ico: any) => ico.className.baseVal === name
    );
    if (!icon) return Util.getIcon('missing', width, height);

    icon.setAttribute('width', `${width}px`);
    icon.setAttribute('height', `${height}px`);
    if (fill) icon.setAttribute('fill', fill);

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
