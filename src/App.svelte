<script>
  import {
    Button,
    FormGroup,
    RadioButtonGroup,
    RadioButton,
    Select,
    SelectItem
  } from "carbon-components-svelte";
  import Add16 from "carbon-icons-svelte/lib/Add16";

  // Only executes in "development" mode
  // Completely removed when building for production
  if (process.env.NODE_ENV === "development") {
    console.group("carbon-svelte-webpack");
    console.info("This message only appears in development.");
    console.groupEnd();
  }

  let size = "default";
  let toggle = false;

  let selectedOption = "two";
</script>

<style>
  header {
    margin-top: 2.5rem;
  }

  .grid-lines * {
    outline: 1px solid rgba(0, 0, 0, 0.15);
  }

  .bx--row {
    margin-bottom: 4rem;
  }

  .col--section {
    margin-bottom: 2.5rem;
  }
</style>

<div class="bx--grid" class:grid-lines={toggle}>
  <header class="bx--row">
    <div class="bx--col">
      <h1>Carbon Components Svelte</h1>
      <div style="margin-top: 2.5rem">
        <Button
          kind="tertiary"
          size="small"
          on:click={() => {
            toggle = !toggle;
          }}>
          {toggle ? 'Hide' : 'Show'} grid lines
        </Button>
      </div>
    </div>
  </header>
  <div class="bx--row">
    <div class="bx--col-lg-2">
      <h4>Typography</h4>
    </div>
    <div class="bx--col">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>
    </div>
  </div>
  <div class="bx--row">
    <div class="bx--col-lg-2">
      <h4>Components</h4>
    </div>
    <div class="bx--col">
      <div class="col--section">
        <Button {size}>Primary button</Button>
        <Button {size} kind="secondary">Secondary button</Button>
        <Button {size} kind="tertiary">Tertiary button</Button>
        <Button {size} kind="ghost">Ghost button</Button>
        <Button {size} kind="danger">Danger button</Button>
      </div>
      <div class="col--section">
        <FormGroup legendText="Button Size (size)">
          <RadioButtonGroup
            orientation="vertical"
            legend="Button Size (size)"
            bind:selected={size}>
            <RadioButton value="default" id="default" labelText="default" />
            <RadioButton value="field" id="field" labelText="field" />
            <RadioButton value="small" id="small" labelText="small" />
          </RadioButtonGroup>
        </FormGroup>
      </div>
      <Select bind:selected={selectedOption}>
        <SelectItem value="one">Option 1</SelectItem>
        <SelectItem value="two">Option 2</SelectItem>
        <SelectItem value="three">Option 3</SelectItem>
      </Select>
      <div style="margin-top: 1rem;">Selected option: {selectedOption}</div>
    </div>
  </div>
</div>
