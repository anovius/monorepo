-- migrate:up
ALTER TABLE transfers
ADD COLUMN relayer_fees jsonb;
DROP VIEW public.transfers_with_ttr_ttv;
ALTER TABLE transfers DROP COLUMN relayer_fee;
CREATE VIEW public.transfers_with_ttr_ttv AS
SELECT tf.transfer_id,
    tf.nonce,
    tf."to",
    tf.call_data,
    tf.origin_domain,
    tf.destination_domain,
    tf.receive_local,
    tf.origin_chain,
    tf.origin_transacting_asset,
    tf.origin_transacting_amount,
    tf.origin_bridged_asset,
    tf.origin_bridged_amount,
    tf.xcall_caller,
    tf.xcall_transaction_hash,
    tf.xcall_timestamp,
    tf.xcall_gas_price,
    tf.xcall_gas_limit,
    tf.xcall_block_number,
    tf.destination_chain,
    tf.status,
    tf.routers,
    tf.destination_transacting_asset,
    tf.destination_transacting_amount,
    tf.destination_local_asset,
    tf.destination_local_amount,
    tf.execute_caller,
    tf.execute_transaction_hash,
    tf.execute_timestamp,
    tf.execute_gas_price,
    tf.execute_gas_limit,
    tf.execute_block_number,
    tf.execute_origin_sender,
    tf.reconcile_caller,
    tf.reconcile_transaction_hash,
    tf.reconcile_timestamp,
    tf.reconcile_gas_price,
    tf.reconcile_gas_limit,
    tf.reconcile_block_number,
    tf.update_time,
    tf.delegate,
    tf.message_hash,
    tf.canonical_domain,
    tf.slippage,
    tf.origin_sender,
    tf.bridged_amt,
    tf.normalized_in,
    tf.canonical_id,
    tf.router_fee,
    tf.xcall_tx_origin,
    tf.execute_tx_origin,
    tf.reconcile_tx_origin,
    tf.relayer_fees,
    tf.error_status,
    tf.backoff,
    tf.next_execution_timestamp,
    (tf.execute_timestamp - tf.xcall_timestamp) AS ttv,
    (tf.reconcile_timestamp - tf.xcall_timestamp) AS ttr
FROM public.transfers tf;
-- migrate:down
ALTER TABLE transfers
ADD COLUMN relayer_fee character varying(255);
DROP VIEW public.transfers_with_ttr_ttv;
ALTER TABLE transfers DROP COLUMN relayer_fees;
CREATE VIEW public.transfers_with_ttr_ttv AS
SELECT tf.transfer_id,
    tf.nonce,
    tf."to",
    tf.call_data,
    tf.origin_domain,
    tf.destination_domain,
    tf.receive_local,
    tf.origin_chain,
    tf.origin_transacting_asset,
    tf.origin_transacting_amount,
    tf.origin_bridged_asset,
    tf.origin_bridged_amount,
    tf.xcall_caller,
    tf.xcall_transaction_hash,
    tf.xcall_timestamp,
    tf.xcall_gas_price,
    tf.xcall_gas_limit,
    tf.xcall_block_number,
    tf.destination_chain,
    tf.status,
    tf.routers,
    tf.destination_transacting_asset,
    tf.destination_transacting_amount,
    tf.destination_local_asset,
    tf.destination_local_amount,
    tf.execute_caller,
    tf.execute_transaction_hash,
    tf.execute_timestamp,
    tf.execute_gas_price,
    tf.execute_gas_limit,
    tf.execute_block_number,
    tf.execute_origin_sender,
    tf.reconcile_caller,
    tf.reconcile_transaction_hash,
    tf.reconcile_timestamp,
    tf.reconcile_gas_price,
    tf.reconcile_gas_limit,
    tf.reconcile_block_number,
    tf.update_time,
    tf.delegate,
    tf.message_hash,
    tf.canonical_domain,
    tf.slippage,
    tf.origin_sender,
    tf.bridged_amt,
    tf.normalized_in,
    tf.canonical_id,
    tf.router_fee,
    tf.xcall_tx_origin,
    tf.execute_tx_origin,
    tf.reconcile_tx_origin,
    tf.relayer_fee,
    tf.error_status,
    tf.backoff,
    tf.next_execution_timestamp,
    (tf.execute_timestamp - tf.xcall_timestamp) AS ttv,
    (tf.reconcile_timestamp - tf.xcall_timestamp) AS ttr
FROM public.transfers tf;