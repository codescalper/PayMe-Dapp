import React from 'react';
import { Container, Grid, Link, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <Link href="https://github.com/codescalper" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit" className="icon-button">
                                <FaGithub />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/mayankonli" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit" className="icon-button">
                                <FaLinkedin />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.youtube.com/@mhtcetshalamayanksingh" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit" className="icon-button">
                                <FaYoutube />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://twitter.com/mayanks_tw" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit" className="icon-button">
                                <FaTwitter />
                            </IconButton>
                        </Link>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Footer;
