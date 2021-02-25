import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

function Footer() {
    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonial</FooterLink>
                                <FooterLink to="/signin">Carreers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonial</FooterLink>
                                <FooterLink to="/signin">Carreers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla {new Date().getFullYear} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
