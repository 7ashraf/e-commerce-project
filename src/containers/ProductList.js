import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Icon, Image, Item, Label } from 'semantic-ui-react'
import axios from 'axios'
import checkPropTypes from 'prop-types/checkPropTypes';
import { productListURL } from "../constants"

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ProductList = () => {


    const getApi = () => {
        axios
            //.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7543b5f1555c3af59d14211d3bb67e36')
            .get(productListURL)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        < Container >
            <Item.Group divided>
                <Item>
                    <Item.Image src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Item Name 1 </Item.Header>
                        <Item.Meta>
                            <span className='cinema'>Item Meta 1</span>
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

                <Item>
                    <Item.Image src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Item Name 2 </Item.Header>
                        <Item.Meta>
                            <span className='cinema'>Item Meta 2</span>
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


                <Item>
                    <Item.Image src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Item Name 1 </Item.Header>
                        <Item.Meta>
                            <span className='cinema'>Item Meta 1</span>
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

            </Item.Group>
        </Container >


    )
};
export default ProductList