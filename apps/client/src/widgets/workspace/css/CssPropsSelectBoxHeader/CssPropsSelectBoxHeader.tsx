import { addPrefixToCssClassName, removeCssClassNamePrefix } from '@/shared/utils';

import { Select } from '@/shared/ui';
import { useCssClassList } from '@/shared/hooks';
import { useCssPropsStore } from '@/shared/store';

/**
 *
 * @description
 * CSS 클래스를 선택할 수 있는 헤더 컴포넌트
 */
export const CssPropsSelectBoxHeader = () => {
  const currentCssClassName = useCssPropsStore((state) => state.currentCssClassName);
  const setCurrentCssClassName = useCssPropsStore((state) => state.setCurrentCssClassName);
  const { selectOptions } = useCssClassList();
  return (
    <header className="py-border flex h-12 items-center justify-between border-b-yellow-500 bg-yellow-200 px-4">
      <p className="text-semibold-md text-gray-black truncate">CSS 클래스 속성 편집</p>
      <Select
        options={selectOptions}
        value={removeCssClassNamePrefix(currentCssClassName)}
        onChange={(selected: string) => setCurrentCssClassName(addPrefixToCssClassName(selected))}
        placeholder="클래스를 선택해주세요"
      />
    </header>
  );
};
