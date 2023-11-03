import { motion, AnimatePresence } from "framer-motion";

type ItemType = {
  id: number;
  value: string;
};

type PropTypes = {
  dropDownData: ItemType[];
  isModalOpen: boolean;
  handleItemChange: (value: string) => {};
};

function DropDown({ dropDownData, isModalOpen, handleItemChange }: PropTypes) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          variants={{
            open: {
              top: 30,
              opacity: 1,
            },
            close: {
              top: 20,
              opacity: 0,
            },
          }}
          className="absolute z-50  rounded-2xl border bg-gray-500 text-gray-700 shadow-md md:min-w-[8.5rem] xl:min-w-[12.5rem]"
          initial="close"
          animate="open"
          exit="close"
        >
          <ul className="px-3">
            {dropDownData.map((item) => (
              <div key={item.id}>
                <li
                  className="cursor-pointer py-3"
                  onClick={() => handleItemChange(item.value)}
                >
                  <p>{item.value}</p>
                </li>
                <hr />
              </div>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropDown;
