import React from 'react';
import CheckboxGroup, { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import styles from './IntroCheckBoxItem.module.scss';

type IntroCheckBoxItemProps = React.ComponentProps<typeof CheckboxGroup.Item>;

const IntroCheckBoxItem = ({ ...props }: IntroCheckBoxItemProps) => {
    const { isChecked } = useCheckboxGroup();
    return (
        <CheckboxGroup.Item className={styles.introCheckBoxItem} {...props}>
            <input type="checkbox" checked={isChecked(props.value)} />
            {props.children}
        </CheckboxGroup.Item>
    );
};

export default IntroCheckBoxItem;
