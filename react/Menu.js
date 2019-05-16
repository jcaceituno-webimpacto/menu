import React, { Component } from 'react';
import styles from './styles.css';


export default class Menu extends Component {
    static defaultProps = {
        links:[]
    }


    static getSchema = (props) => {
        return {
            properties: {
                links: {
                    items: {
                        properties: {
                            texto:{
                                default: '',
                                title: 'Texto',
                                type: 'string',
                            },
                            url:{
                                default: '',
                                title: 'URL',
                                type: 'string',
                            }
                        },
                        title: 'Link',
                        type: 'object',
                    },
                    minItems: 1,
                    title: 'Links',
                    type: 'array',
                },
            },
            title: 'Menu',
            type: 'object',
        }
    }


    render() {
        const {links}=this.props;

        return (
            <ul className={styles.ulPadre}>
                {links.map((l, i) => 
                    <li><a href={l.url}>{l.texto}</a></li>
                )}
            </ul>
        )
    }
}