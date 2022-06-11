import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Icon, Image, Item, ItemGroup, Label } from 'semantic-ui-react'
import { authAxios } from "../utils"
import axios from 'axios'
import checkPropTypes from 'prop-types/checkPropTypes';
import { addToCartURL, productListURL } from "../constants"

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ProductList = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    const getApi = () => {
        setLoading(true)
        axios
            .get(productListURL)
            .then((res) => {
                setLoading(true)
                setData(res.data)
                console.log(data)
            })
            .catch(err => {
                setError(error)
            });
    };

    useEffect(() => {
        getApi();
    }, []);


    const handleAddToCart = (slug) => {
        setLoading(true)
        authAxios
            .post(addToCartURL, { slug })
            .then((res) => {
                setLoading(false)
                console.log(data);
            })
            .catch(err => {
                setError(err)
            });

    }

    return (
        < Container >

            <ItemGroup divided>

                {data?.map(
                    (item) => {
                        return (
                            <Item key={item.id}>
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
                                        <Button primary floated='right' icon labelPosition='right' onClick={() => handleAddToCart(item.slug)}>
                                            Add to cart
                                            <Icon name='cart plus' />
                                        </Button>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        )
                    }
                )}
            </ItemGroup>
        </Container >


    )


};
export default ProductList