import { removeCssClassNamePrefix, trackEvent } from '../utils';

import { TTotalCssPropertyObj } from '@/shared/types';
import { create } from 'zustand';
import { removeCssClassNamePrefix, trackEvent } from '../utils';

type TcssProps = {
  currentCssClassName: string;
  selectedCssCategory: string;
  totalCssPropertyObj: TTotalCssPropertyObj;

  addNewCssClass: (newCssClass: string) => void;
  setCurrentCssClassName: (currentCssClassName: string) => void;
  setSelectedCssCategory: (cssCategory: string) => void;
  setCheckedCssPropertyObj: (className: string, label: string, value: boolean) => void;
  setCssOptionObj: (className: string, label: string, value: string) => void;
  initCssPropertyObj: (totalCssPropertyObj: TTotalCssPropertyObj) => void;
  removeCssClass: (className: string) => void;
};

export const useCssPropsStore = create<TcssProps>((set) => {
  return {
    currentCssClassName: '',
    selectedCssCategory: '레이아웃',
    totalCssPropertyObj: {},
    addNewCssClass: (newCssClass) => {
      set((state) => {
        if (!state.totalCssPropertyObj[newCssClass]) {
          return {
            totalCssPropertyObj: {
              ...state.totalCssPropertyObj,
              [newCssClass]: {
                checkedCssPropertyObj: {},
                cssOptionObj: {},
              },
            },
          };
        }
        return {};
      });
      trackEvent(`css_class_created`, {
        item: newCssClass,
      });
    },
    setCurrentCssClassName: (currentCssClassName) => {
      set({ currentCssClassName });
      trackEvent(`css_class_selected`, {
        item: removeCssClassNamePrefix(currentCssClassName),
      });
    },
    setSelectedCssCategory: (selectedCssCategory) => {
      set({ selectedCssCategory });
      trackEvent(`css_category_selected`, {
        item: selectedCssCategory,
      });
    },
    setCheckedCssPropertyObj: (className, label, value) => {
      set((state) => {
        const updatedObj = state.totalCssPropertyObj[className] || {
          checkedCssPropertyObj: {},
          cssOptionObj: {},
        };
        updatedObj.checkedCssPropertyObj[label] = value;
        return {
          totalCssPropertyObj: {
            ...state.totalCssPropertyObj,
            [className]: updatedObj,
          },
        };
      });
      trackEvent(`css_category_item_checked`, {
        item: className,
      });
    },
    setCssOptionObj: (className, label, value) => {
      set((state) => {
        const updatedObj = state.totalCssPropertyObj[className] || {
          checkedCssPropertyObj: {},
          cssOptionObj: {},
        };
        updatedObj.cssOptionObj[label] = value;
        return {
          totalCssPropertyObj: {
            ...state.totalCssPropertyObj,
            [className]: updatedObj,
          },
        };
      });
      trackEvent(`css_category_item_inputted`, {
        item: label,
        value: value,
      });
    },

    initCssPropertyObj: (totalCssPropertyObj) =>
      set({ totalCssPropertyObj, currentCssClassName: '', selectedCssCategory: '레이아웃' }),
    removeCssClass: (className) =>
      set((state) => {
        const updatedTotalCssPropertyObj = { ...state.totalCssPropertyObj };
        delete updatedTotalCssPropertyObj[className];
        return {
          totalCssPropertyObj: updatedTotalCssPropertyObj,
          currentCssClassName:
            className === state.currentCssClassName ? '' : state.currentCssClassName,
        };
      }),
  };
});
