import FlexBox from '@/headful/FlexBox/FlexBox';
import { useDropdown } from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
// import { FaCheck } from 'react-icons/fa6';
import styles from './ContactSelectItem.module.scss';

type ContactSelectItemProps = {
    children: React.ReactNode;
    value: string;
    onContactSelectItemClick?: (value: string) => void;
};

const ContactSelectItem = ({ children, value, onContactSelectItemClick }: ContactSelectItemProps) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async (value: string) => {
        onContactSelectItemClick && onContactSelectItemClick(value);
        closeDropdown();
    };

    return (
        <SelectGroup.Item
            className={styles.contactSelectItem}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            <FlexBox justifyContent="space-between" width={`100%`}>
                <div>{children}</div>
            </FlexBox>
        </SelectGroup.Item>
    );
};

export default ContactSelectItem;
