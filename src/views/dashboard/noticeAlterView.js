import React from "react"
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
import DashboardAlterAction from "../../components/dashboardAlterAction"
import ImageUpload from "../../components/dashboardImageUpload"
//
export default function NoticeAlterView({
  methods,
  noticeCategoryData,
  disabled,
  setDisabled,
  onActionCallback,
  onValidateCallback,
  onSelectCategory,
  onCancelActionCallback,
  onImageUpload,
  onImageChange,
  mode
}) {
  //
  return (
    <Box>
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, mb: 3 }}
      >
        {mode.title}
      </Typography>
      {/**/}
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <DashboardAlterAction
            setDisabled={setDisabled}
            actionCallback={onActionCallback}
            validateCallback={onValidateCallback}
            cancelActionCallback={onCancelActionCallback}
            buttonLabel={mode.buttonLabel}
          />
          {/**/}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                {mode.title}
              </Typography>
              {/**/}
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.title}
                  disabled={disabled}
                  {...methods.register("title", { required: true })}
                />
                {/**/}
                <FormControl fullWidth margin="normal" size="small" required>
                  <InputLabel id="category-label">{Lang.category}</InputLabel>
                  <Select
                    labelId="category-label"
                    label={Lang.category}
                    onChange={onSelectCategory}
                    value={methods.getValues("category_id")}
                  >
                    {noticeCategoryData.map((item, index) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/**/}
                <ImageUpload
                  url={methods.getValues("thumbnail_url")}
                  onImageUpload={onImageUpload}
                  onImageChange={onImageChange}
                />
                {/**/}
                <TextField
                  margin="normal"
                  size="small"
                  multiline
                  required
                  maxRows={10}
                  fullWidth
                  label={Lang.content}
                  disabled={disabled}
                  {...methods.register("content", { required: true })}
                />
              </Box>
            </Paper>
          </Grid>
          {/**/}
        </Grid>
      </FormProvider>
    </Box>
  )
}
