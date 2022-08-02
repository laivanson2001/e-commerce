import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dress</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product: </FilterText>
                    <Select defaultValue={'none'}>
                        <Option disabled value={'none'}>
                            Color
                        </Option>
                        <Option value={'white'}>White</Option>
                        <Option value={'black'}>Black</Option>
                        <Option value={'red'}>Red</Option>
                        <Option value={'blue'}>Blue</Option>
                        <Option value={'yellow'}>Yellow</Option>
                        <Option value={'green'}>Green</Option>
                    </Select>
                    <Select defaultValue={'none'}>
                        <Option disabled value={'none'}>
                            Size
                        </Option>
                        <Option value={'xs'}>XS</Option>
                        <Option value={'s'}>S</Option>
                        <Option value={'m'}>M</Option>
                        <Option value={'l'}>L</Option>
                        <Option value={'xl'}>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product: </FilterText>
                    <Select defaultValue={'newest'}>
                        <Option value={'newest'}>Newest</Option>
                        <Option value={'asc'}>Price (asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList