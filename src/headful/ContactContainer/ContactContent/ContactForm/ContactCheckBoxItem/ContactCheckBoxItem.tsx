import React from 'react';
import CheckboxGroup, { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import styles from './ContactCheckBoxItem.module.scss';

type ContactCheckBoxItemProps = React.ComponentProps<typeof CheckboxGroup.Item>;

const ContactCheckBoxItem = ({ ...props }: ContactCheckBoxItemProps) => {
    const { isChecked } = useCheckboxGroup();
    return (
        <CheckboxGroup.Item className={styles.contactCheckBoxItem} {...props}>
            <input type="checkbox" checked={isChecked(props.value)} />
            {props.children}
        </CheckboxGroup.Item>
    );
};

export default ContactCheckBoxItem;
