

app.use("/api/project",projectRoutes);

app.listen(port,()=>console.log(`app is running on port ${port}`));