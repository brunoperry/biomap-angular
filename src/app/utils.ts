export class Util {
  static getIcon(name: string, width: number, height: number): any {
    const template = document.querySelector('template')?.content;
    if (!template) return 'null';

    let icon = document.importNode(template, true).querySelector(`.${name}`);

    if (!icon) return 'null';
    icon.setAttribute('width', `${width}px`);
    icon.setAttribute('height', `${height}px`);

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
