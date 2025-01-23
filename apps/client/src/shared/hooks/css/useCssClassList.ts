import { useEffect, useState } from 'react';

import { TOption } from '@/shared/types';
import { useClassBlockStore } from '@/shared/store';

export const useCssClassList = () => {
  const { classBlockList } = useClassBlockStore();
  const [cssClassList, setCssClassList] = useState<string[]>([]);

  useEffect(() => {
    setCssClassList(classBlockList);
  }, [classBlockList]);

  const selectOptions: TOption[] = [
    { value: '', label: '클래스를 선택해주세요' },
    ...cssClassList.map((cssClass) => ({
      value: cssClass,
      label: cssClass,
    })),
  ];

  return { selectOptions };
};
