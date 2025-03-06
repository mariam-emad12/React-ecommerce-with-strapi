import { useState } from "react";
import {
  Box,
  Container,
  Dialog,
  Rating,
  Stack,
  Typography,
  useTheme,
  Button,
  Card,
  CardActions,
  CardMedia,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useGetproductByNameQuery } from "../../Redux/product";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Main() {
  const theme = useTheme();
  const [alignment, setAlignment] = useState("left");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen = (product) => {
    setSelectedProduct(product); // Set selected product
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (isLoading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6">404 Page</Typography>;

  return (
    <Container sx={{ paddingBottom: 9 }}>
      {/* Header */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={9}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(event, newAlignment) => setAlignment(newAlignment)}
          color="error"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton value="left" onClick={() => setData(allProductsAPI)}>
            All Products
          </ToggleButton>
          <ToggleButton value="center" onClick={() => setData(menCategoryAPI)}>
            Men Category
          </ToggleButton>
          <ToggleButton value="right" onClick={() => setData(womenCategoryAPI)}>
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Products */}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.data.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 350, mt: 6 }}>
            <CardMedia
              sx={{ height: 320 , ":hover":{scale:(1.03) , transition:"0.7s" , rotate:"1deg"} }}
              image={`${
                item.productImg[0].url
              }`}
              title={item.productTitle}
            />
            <Stack direction={"row"} justifyContent={"space-between"} mx={2}>
              <Typography gutterBottom variant="h6">
                {item.productTitle}
              </Typography>
              <Typography variant="subtitle1">${item.productPrice}</Typography>
            </Stack>
            <Typography variant="body2" mx={2} color="text.secondary">
              {item.productDescription}
            </Typography>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="large"
                onClick={() => handleClickOpen(item)} // Pass product to modal
                sx={{ textTransform: "capitalize" }}
              >
                <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                Add to cart
              </Button>
              <Rating name="read-only" value={item.productRating} readOnly />
            </CardActions>
          </Card>
        ))}
      </Stack>

      {/* Modal */}
      <BootstrapDialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "100%", md: "800px" } },
        }}
        onClose={handleClose}
        open={open}
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } },
        }}
      >
        {selectedProduct && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                width={400}
                height={410}
                style={{  objectFit: "cover" }}
                src={`${
                  selectedProduct?.productImg[0].url
                }`}
                alt=""
              />
            </Box>

            {/* Details */}
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  py: 3,
                }}
              >
                {selectedProduct.productTitle}
              </Typography>
              <Typography
                my={0.4}
                fontSize={"22px"}
                color="crimson"
                fontWeight={"bold"}
              >
                ${selectedProduct.productPrice}
              </Typography>
              <Typography variant="body1">
                {selectedProduct.productDescription}
              </Typography>

              {/* Thumbnail images */}
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"4px"}
                my={2}
                flexWrap={"wrap"}
              >
                {selectedProduct.productImg.map((img, index) => (
                  <img
                    key={index}
                    width={100}
                    height={100}
                    style={{ borderRadius: "3px", cursor: "pointer" }}
                    src={`${img.url}`}
                    alt={`Thumbnail ${index}`}
                  />
                ))}
              </Box>

              <Button variant="contained" sx={{ marginY: 2 }}>
                <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                Buy Now
              </Button>
            </Box>
          </Box>
        )}
      </BootstrapDialog>
    </Container>
  );
}
