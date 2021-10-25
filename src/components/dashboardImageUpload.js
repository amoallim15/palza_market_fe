import React from "react"
import { styled } from "@mui/material/styles"
import { Box, IconButton } from "@mui/material"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import ClearIcon from "@mui/icons-material/Clear"
//
const Input = styled("input")({
  display: "none"
})
//
export default function DashboardImageUpload({
  onImageChange,
  onImageUpload,
  url
}) {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(url)
  //
  const onChange = async (e) => {
    let url = ""
    if (!e.target.files[0]) {
      url = ""
    } else {
      if (!onImageUpload) return
      const result = await onImageUpload(e.target.files[0])
      if (result) {
        url = result.url
      }
    }
    await setThumbnailUrl(url)
    if (!onImageChange) return
    await onImageChange(url)
  }
  const onRemoveThumbnailClick = async (e) => {
    await setThumbnailUrl("")
    await onImageChange("")
  }
  //
  //
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 200,
        alignItems: "center",
        border: 1,
        borderStyle: "dashed",
        display: "flex",
        justifyContent: "center",
        mt: 2,
        mb: 1
      }}
    >
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          style={{ width: "fit-content", height: "fit-content" }}
        />
      )}
      {/**/}
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          buttom: 0,
          width: "100%",
          height: "100%"
        }}
      >
        {!thumbnailUrl && (
          <label htmlFor="thumbail-file">
            <Input
              accept="image/*"
              id="thumbail-file"
              type="file"
              onChange={onChange}
            />

            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        )}
        {thumbnailUrl && (
          <IconButton
            color="primary"
            component="span"
            onClick={onRemoveThumbnailClick}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}
