import CheckboxGroup from '@/headless/CheckboxGroup/CheckboxGroup';
import React from 'react';
import IntroCheckBoxItem from './IntroCheckBoxItem/IntroCheckBoxItem';
import styles from './IntroCheckBoxGroup.module.scss';

type IntroCheckBoxItemProps = React.ComponentProps<typeof CheckboxGroup>;

const IntroCheckBoxGroup = ({ children, ...props }: IntroCheckBoxItemProps) => {
    return (
        <CheckboxGroup {...props}>
            <div className={styles.introCheckBoxGroup}>{children}</div>
        </CheckboxGroup>
    );
};

export default IntroCheckBoxGroup;

IntroCheckBoxGroup.Item = IntroCheckBoxItem;
