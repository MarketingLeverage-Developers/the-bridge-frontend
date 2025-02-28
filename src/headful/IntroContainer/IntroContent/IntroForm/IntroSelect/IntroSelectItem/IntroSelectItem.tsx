import FlexBox from '@/headful/FlexBox/FlexBox';
import { useDropdown } from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
// import { FaCheck } from 'react-icons/fa6';
import styles from './IntroSelectItem.module.scss';

type IntroSelectItemProps = {
    children: React.ReactNode;
    value: string;
    onIntroSelectItemClick?: (value: string) => void;
};

const IntroSelectItem = ({ children, value, onIntroSelectItemClick }: IntroSelectItemProps) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async (value: string) => {
        onIntroSelectItemClick && onIntroSelectItemClick(value);
        closeDropdown();
    };

    return (
        <SelectGroup.Item
            className={styles.introSelectItem}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            <FlexBox justifyContent="space-between" width={`100%`}>
                <div>{children}</div>
            </FlexBox>
        </SelectGroup.Item>
    );
};

export default IntroSelectItem;
