import Swal from 'sweetalert2';

export const showSuccessAlert = (message = message || 'Operation completed successfully.') => {
  Swal.fire({
    html: `
      <div class="p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                     10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Success</h2>
        <p class="text-gray-600 text-base mb-4 max-w-sm mx-auto leading-relaxed">${message}</p>
        <div class="pt-2 border-t border-gray-100">
          <p class="text-xs text-gray-400 mb-3">Everything went as expected</p>
        </div>
      </div>`,
    timer: 1500,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    timerProgressBar: true,
    background: '#ffffff',
    allowOutsideClick: true,
    allowEscapeKey: true,
    customClass: {
      popup: 'rounded-2xl shadow-2xl border-0',
    },
  });
};
