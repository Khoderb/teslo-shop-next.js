import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { IProduct } from "@/interfaces"
import NextLink from 'next/link';




interface Props {
    product: IProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => (
             isHovered 
            ? product.images[1] 
            : product.images[0]
        
        ),[product.images, isHovered]
    );

    return (
        <Grid
            item xs={6} sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NextLink href={ `/product/slug`} passHref legacyBehavior>
                <Link>
                    <Card>
                    <CardActionArea title="View Product">
                        <CardMedia
                            component={'img'}
                            alt={product.title}
                            image={ `products/${ productImage }` }
                            className='fadeIn'
                        />
                    </CardActionArea>
                    </Card>
                </Link>
            </NextLink>

            <Box sx={{ mt:1 }} className='fadeIn' >
                <Typography fontWeight={500} sx={{ mb:1 }}>{product.title}</Typography>
                <Typography fontWeight={700}> {` $ ${product.price}` }</Typography>
            </Box>
        </Grid>
    )
}
