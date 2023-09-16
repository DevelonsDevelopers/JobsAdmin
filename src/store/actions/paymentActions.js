import { ALL_PAYMENT, LOADING, SUCCESS, UPDATE_PAYMENT, UPDATE_PAYPAL, UPDATE_STRIPE } from '../../Utils/Constant';
import * as api from '../../store/index'

export const AllPayment = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchPayment();
        dispatch ({ type: ALL_PAYMENT, payload: { payments: data }})
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}
export const UpdatePayment = (payment) => async (dispatch) => {
    try {
        const { data } = await api.fetchPayment(payment.paypal_client_id, payment.paypal_secret_id, payment.paypal_sandbox_url, payment.paypal_return_url,  payment.paypal_cancel_url, payment.stripe_publisher_key, payment.stripe_secret_key, payment.stripe_api_version);
        dispatch ({ type: UPDATE_PAYMENT, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdatePaypal = (paypal) => async (dispatch) => {
    console.log('good')
    try {
        const { data } = await api.updatePaypal(paypal.paypal_client_id, paypal.paypal_secret_id, paypal.paypal_sandbox_url, paypal.paypal_return_url,  paypal.paypal_cancel_url);
        console.log('good',data)
        dispatch ({ type: UPDATE_PAYPAL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdateStripe = (stripe) => async (dispatch) => {
    try {
        const { data } = await api.updateStripe(stripe.stripe_publisher_key, stripe.stripe_secret_key, stripe.stripe_api_version);
        dispatch ({ type: UPDATE_STRIPE, payload: data})
    } catch (error) {
        console.log(error)
    }
}
