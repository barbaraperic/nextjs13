import SpacerComponent from '@/app/components/Spacer'
import { newCollection } from '@/utils/actions'
import Modal from '@/app/components/modal'
import { Paragraph } from '@/app/components/texts/texts'

export default function CollectionModal() {
  return (
    <Modal title="Add new word">
      <div className="flex flex-1 flex-col items-center justify-center space-y-6">
        <form
          action={newCollection}
          className="flex flex-col space-y-6 items-center"
        >
          <label className="w-full">
            <span>Front text</span>
            <input
              name="front-text"
              className="w-full p-2 transition-shadow mt-2 shadow focus:shadow-[0_0_0_3px_rgb(7,128,128)]  outline-none"
              required={true}
              type="text"
            />
          </label>
          <label className="w-full">
            <span>Back text</span>
            <input
              name="back-text"
              className="w-full p-2 transition-shadow mt-2 shadow focus:shadow-[0_0_0_3px_rgb(7,128,128)]  outline-none"
              required={true}
              type="text"
            />
          </label>
          <SpacerComponent size="small"></SpacerComponent>
          <button
            type="submit"
            className="w-full hover:shadow-md hover:scale-105 transition duration-200 [border-image:linear-gradient(to_top_right,#078080,#4d9f0c)_10] border-4 border-solid border-transparent bg-white p-2"
          >
            <Paragraph>Save</Paragraph>
          </button>
        </form>
      </div>
    </Modal>
  )
}
