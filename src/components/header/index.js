import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background, PlayButton, Search, SearchIcon, SearchInput, Group, Picture, Dropdown, Profile, Feature, FeatureCallOut, Text, Link, Container, Logo, ButtonLink} from './styles/header';

export default function Header({bg = true, children, ...restProps }){
    return bg ? (<Background {...restProps}>{children}</Background>) : (children);
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
};

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const[searchActive, setSearchActive] = useState(false);
    return (
    <Search {...restProps}>
        <SearchIcon onClick = {() => setSearchActive((searchActive) => !searchActive)}>
            <img src="/images/icons/search.png" alt ="Search" />
        </SearchIcon>
        <SearchInput 
            value = {searchTerm}
            onChange={({target})=> setSearchTerm(target.value)}
            placeholder = "Search flims and series"
            active={searchActive} />
    </Search>);
};

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
};

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
};

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
};

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>;
};

Header.Picture = function HeaderPicture({src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>;
};

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({...restProps}){
    return (
        <ButtonLink {...restProps}/>
    );
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>;
}