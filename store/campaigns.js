import api from '../api';

const LOAD_CAMPAIGNS = 'LOAD_CAMPAIGNS';
const LOADING_CAMPAIGNS = 'LOADING_CAMPAIGNS';
const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
const SELECT_CAMPAIGN = 'SELECT_CAMPAIGN';

const initialState = {
  selectedCampaignId: null,
  isLoading: false,
  list: [],
};

const loadingCampaigns = () => {
  return {
    type: LOADING_CAMPAIGNS,
  };
};

const receiveCampaigns = (campaigns) => {
  return {
    type: RECEIVE_CAMPAIGNS,
    campaigns,
  };
};

export const loadCampaigns = () => {
  return (dispatch) => {
    dispatch(loadingCampaigns());

    api.getCampaigns().then((campaigns) =>
      dispatch(receiveCampaigns(campaigns.data))
    ).catch((err) => console.log(err));
  };
};

export const selectCampaign = (id) => {
  return {
    type: SELECT_CAMPAIGN,
    id,
  };
};

const ACTION_HANDLERS = {
  [LOADING_CAMPAIGNS]: (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [RECEIVE_CAMPAIGNS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      list: action.campaigns,
    };
  },
  [SELECT_CAMPAIGN]: (state, action) => {
    return {
      ...state,
      selectedCampaignId: action.id,
    };
  },
};

export default function reducer (state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action): state;
}
