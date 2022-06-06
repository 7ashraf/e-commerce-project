import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Icon, Image, Item, ItemGroup, Label } from 'semantic-ui-react'
import axios from 'axios'
import checkPropTypes from 'prop-types/checkPropTypes';
import { productListURL } from "../constants"

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ProductList = () => {

    const [items, setItems] = useState({
        error: null,
        loading: false,
        data: []
    });

    const getApi = () => {
        axios
            //.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7543b5f1555c3af59d14211d3bb67e36')
            .get(productListURL)
            .then((res) => {
                setItems({
                    errr: null,
                    loading: false,
                    data: res.data,

                });
                console.log(items)
            })
            .catch(err => {
                console.log(err)
            });
    };

    useEffect(() => {
        getApi();
    }, []);

    console.log(items.data)
    return (
        < Container >
            <ItemGroup divided>
                {items.data.map(
                    (item) => {
                        return <Item>
                            <Item.Image src='/images/wireframe/image.png' />

                            <Item.Content>
                                <Item.Header as='a'>{item.name} </Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>{item.price}</span>
                                </Item.Meta>
                                <Item.Description>{paragraph}</Item.Description>
                                <Item.Extra>
                                    <Label>Label</Label>
                                    <Label icon='globe' content='Additional Languages' />
                                    <Button primary floated='right'>
                                        Button
                                        <Icon name='right chevron' />
                                    </Button>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    }
                )}
            </ItemGroup>
        </Container >


    )
};
export default ProductList