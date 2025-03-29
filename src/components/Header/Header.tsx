import cn from "classnames";
import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import Container from "components/Container";
import Heart from "components/Icons/Heart";
import Logo from "components/Icons/Logo";
import User from "components/Icons/User";
import Text from "components/Text";
import styles from './Header.module.scss';

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={cn('container', styles.container)}>
                <div className={cn(styles.wrapperLogo)}>
                    <Logo/>
                    <Text view={'p-20'} color={'primary'} weight={'bold'} tag={'span'}>
                        Food Client
                    </Text>
                </div>
                <div className={cn(styles.wrapperMenu)}>
                    <nav>
                        <NavLink to="." end>Recipes</NavLink>
                        <NavLink to="0">Ingredients</NavLink>
                        <NavLink to="1">Products</NavLink>
                        <NavLink to="2">Menu Items</NavLink>
                        <NavLink to="3">Meal Planning</NavLink>
                    </nav>
                </div>
                <div className={cn(styles.wrapperInfoProfile)}>
                    <User color={'accent'}/>
                    <Heart color={'accent'}/>
                </div>
            </div>
        </header>
    )
}

export default Header
