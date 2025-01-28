import { Meta, StoryObj } from '@storybook/react';

import { CssTooltip } from './CssTooltip';
import QuestionIcon from '@/shared/assets/question.svg?react';
import { useState } from 'react';

const meta: Meta<typeof CssTooltip> = {
  title: 'entities/workspace/CssTooltip',
  component: CssTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CSS 속성에 관한 정보를 알려주는 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CssTooltip>;

export const Default: Story = {
  args: {
    description: 'css 툴팁입니다.',
    leftX: 0,
    topY: 0,
  },
  render: (args) => {
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);

    const handleMouseEnter = (e: React.MouseEvent) => {
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(e.currentTarget.getBoundingClientRect().y + 8);
    };

    const handleMouseLeave = () => {};
    return (
      <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} />
      </div>
    );
  },
};

export const ScreenOverflow: Story = {
  args: {
    description: 'css 툴팁입니다.',
    leftX: 0,
    topY: 0,
  },
  render: (args) => {
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);

    const handleMouseEnter = (e: React.MouseEvent) => {
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(-e.currentTarget.getBoundingClientRect().y + 40);
    };

    const handleMouseLeave = () => {};
    return (
      <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} />
      </div>
    );
  },
};
