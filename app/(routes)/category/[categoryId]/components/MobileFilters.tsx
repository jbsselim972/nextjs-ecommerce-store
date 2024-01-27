"use client";

import { FC, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import IconButton from "@/components/ui/IconButton";
import Filter from "./Filter";
import CustomButton from "@/components/ui/CustomButton";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <CustomButton
        className="flex items-center gap-x-2 lg:hidden"
        onClick={onOpen}
      >
        Filters
        <Plus size={20} />
      </CustomButton>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/**Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/**Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/**Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            {/**Filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
