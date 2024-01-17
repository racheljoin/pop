import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from 'react';
import { createRoot } from 'react-dom/client';
export interface IPop {
  delay?: number;
  destroyAfterHidden?: boolean;
  customDomId?: string;
  stopBodyScroll?: boolean;
}

const getRandomId = () => {
  return `popReportDom-${new Date().getTime()}`;
};

export const getPopDom = (customDomId: string | undefined) => {
  const popReportDom = customDomId || getRandomId();

  let popDom = document.querySelector(`#${popReportDom}`);
  if (!popDom) {
    popDom = document.createElement('div');
    popDom.id = popReportDom;
    popDom.setAttribute('class', 'popFunctionDom');
    // popDom.setAttribute(
    //   'style',
    //   'position: fixed;top: 0; left: 0; right: 0; bottom: 0; z-index: 99;',
    // );
    document.body.appendChild(popDom);
  }
  return popDom;
};

const PopFunction = ({
  children,
  delay = 0,
  customDomId,
  stopBodyScroll = false,
}: PropsWithChildren<IPop>) => {
  const popDom = getPopDom(customDomId);
  const root = createRoot(popDom);
  const cacheData = window.getComputedStyle(document.body).overflow;

  if (stopBodyScroll) {
    document.body.style.overflow = 'hidden';
  }

  const destroy = (): void => {
    if (stopBodyScroll) {
      document.body.style.overflow = cacheData;
    }
    if (popDom && document.body.contains(popDom)) {
      root.unmount();
      document.body.removeChild(popDom);
    }
  };

  if (delay) {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      destroy();
    }, delay);
  }

  root.render(
    <>
      {Children.map(children as ReactElement, (child: ReactElement) =>
        cloneElement(child, {
          destroy,
        }),
      )}
    </>,
  );
  return destroy;
};
export default PopFunction;
