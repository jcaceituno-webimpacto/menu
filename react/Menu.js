import React, { Component } from 'react';
import styles from './styles.css';
import { Link } from 'vtex.render-runtime'


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
                    <li><Link to={l.url}>{l.texto}</Link></li>
                )}
            </ul>
        )
    }
}