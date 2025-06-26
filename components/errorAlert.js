import Swal from 'sweetalert2';

export const showErrorAlert = (message = 'Something went wrong.') => {
  Swal.fire({
    html: `
      <div class="p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                    10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Upload Failed</h2>
        <p class="text-gray-600 text-base mb-4 max-w-sm mx-auto leading-relaxed">${message}</p>
        <div class="pt-2 border-t border-gray-100">
          <p class="text-xs text-gray-400 mb-3">Please check your file and try again</p>
        </div>
      </div>`,
    timer: 8000,
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
  })
};
