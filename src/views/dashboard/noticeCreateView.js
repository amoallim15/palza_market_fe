import React from "react"
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
import DashboardCreateAction from "../../components/dashboardCreateAction"
import ImageUpload from "../../components/dashboardImageUpload"
//
export default function NoticeCreateView({
  methods,
  noticeCategoryData,
  disabled,
  setDisabled,
  onActionCallback,
  onValidateCallback,
  onDoneCallback,
  onSelectCategory,
  onCancelActionCallback,
  onImageUpload,
  onImageChange
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
        {Lang.createNotice}
      </Typography>
      {/**/}
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <DashboardCreateAction
            setDisabled={setDisabled}
            actionCallback={onActionCallback}
            validateCallback={onValidateCallback}
            doneCallback={onDoneCallback}
            cancelActionCallback={onCancelActionCallback}
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
                {Lang.createNotice}
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
                    value={Lang.category}
                    label={Lang.category}
                    onChange={onSelectCategory}
                  >
                    {noticeCategoryData.data?.map((item, index) => (
                      <MenuItem key={item._id} value={item._id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/**/}
                <ImageUpload
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
