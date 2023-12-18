'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay isOpen={isOpen} onClose={onClose} />

          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
          >
            <motion.div
              className="bg-white rounded-md p-4 w-96"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {children}

              <button
                className="text-secondary hover:text-secondary-dark transition duration-300"
                onClick={onClose}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
