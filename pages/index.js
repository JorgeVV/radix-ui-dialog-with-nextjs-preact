import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Trigger</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close Dialog</Dialog.Close>
        <span>Content...</span>
      </Dialog.Content>
    </Dialog.Root>
  );
}
