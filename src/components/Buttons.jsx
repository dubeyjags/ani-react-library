import AniButton from "./AniButton.jsx";
export const Buttons = () => {
  return (
    <>
    <h1 className="text-3xl">Buttons</h1>
      
      <h2 className="mt-3">Main Buttons Types</h2>
      <div>
        <AniButton type="primary">Primay</AniButton>
        <AniButton>Default</AniButton>
        <AniButton type="link">Link</AniButton>
      </div>


      <h2 className="mt-3">Button Varients</h2>
      <div>
        <AniButton variant="contained">Contained</AniButton>
        <AniButton variant="outlined">Outlined</AniButton>
        <AniButton variant="text">Text</AniButton>
      </div>

      <h2 className="mt-3">Button Sizes</h2>
      <div>
        <AniButton variant="contained" size="small">Small</AniButton>
        <AniButton variant="contained" size="medium">Medium</AniButton>
        <AniButton variant="contained" size="large">Large</AniButton>
      </div>

      <h2 className="mt-3">Buttons Colors</h2>
      <div>
        <AniButton variant="contained" color="primary">Primary</AniButton>
        <AniButton variant="contained" color="secondary">Secondary</AniButton>
        <AniButton variant="contained" color="success">Success</AniButton>
        <AniButton variant="contained" color="error">Error</AniButton>
        <AniButton variant="contained" color="warning">Warning</AniButton>
        <AniButton variant="contained" color="info">Info</AniButton>
      </div>
      <h2 className="mt-3">Disabled Buttons</h2>
      <div>
        <AniButton variant="contained" disabled>Contained</AniButton>
        <AniButton variant="outlined" disabled>Outlined</AniButton>
        <AniButton variant="text" disabled>Text</AniButton>
      </div>
    </>
  )
}
