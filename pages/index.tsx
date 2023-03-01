import { NextPage } from 'next';
import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';

import { useProducts } from '@/hooks';
import { IProduct } from '@/interfaces';

interface Props {
}

const HomePage: NextPage<Props> = ({}) => {
    const { products, isLoading, isError } = useProducts('/products');

   return (
        <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find the Best Teslo Products Here'}>
            <Typography variant='h4' sx={{ my:3 , ml:.5}}>All Products</Typography>
            {
            isLoading 
                ? <Typography variant='h6' sx={{ my:3 , ml:.5}}>Loading...</Typography>
                : <ProductList 
                    products={ products }
                />
            }
            
        </ShopLayout>
    )
}

export default HomePage;