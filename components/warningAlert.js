import Swal from 'sweetalert2';

export const showWarningAlert = (message = message || 'Please be cautious.') => {
  Swal.fire({
    html: `
      <div class="p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Warning</h2>
        <p class="text-gray-600 text-base mb-4 max-w-sm mx-auto leading-relaxed">${message}</p>
        <div class="pt-2 border-t border-gray-100">
          <p class="text-xs text-gray-400 mb-3">Please review before proceeding</p>
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
